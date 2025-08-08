import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from "react-icons/fi";

import "./ImageCarousel.css";

const DEFAULT_ITEMS = [
	{
		title: "Default Item 1",
		description: "Default description",
		icon: <FiCode className="image-carousel-icon" />,
		id: 1,
	},
	{
		title: "Default Item 2",
		description: "Default description",
		icon: <FiLayers className="image-carousel-icon" />,
		id: 2,
	},
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function ImageCarousel({
	items = DEFAULT_ITEMS,
	baseWidth = 300,
	autoplay = false,
	autoplayDelay = 3000,
	pauseOnHover = false,
	loop = false,
	round = false,
}) {
	const containerPadding = 16;
	const itemWidth = baseWidth - containerPadding * 2;
	const itemHeight = round ? itemWidth : Math.max(200, itemWidth * 0.9); // Consistent height
	const trackItemOffset = itemWidth + GAP;

	const carouselItems = loop ? [...items, items[0]] : items;
	const [currentIndex, setCurrentIndex] = useState(0);
	const x = useMotionValue(0);
	const [isHovered, setIsHovered] = useState(false);
	const [isResetting, setIsResetting] = useState(false);

	const containerRef = useRef(null);
	useEffect(() => {
		if (pauseOnHover && containerRef.current) {
			const container = containerRef.current;
			const handleMouseEnter = () => setIsHovered(true);
			const handleMouseLeave = () => setIsHovered(false);
			container.addEventListener("mouseenter", handleMouseEnter);
			container.addEventListener("mouseleave", handleMouseLeave);
			return () => {
				container.removeEventListener("mouseenter", handleMouseEnter);
				container.removeEventListener("mouseleave", handleMouseLeave);
			};
		}
	}, [pauseOnHover]);

	useEffect(() => {
		if (autoplay && (!pauseOnHover || !isHovered)) {
			const timer = setInterval(() => {
				setCurrentIndex((prev) => {
					if (prev === items.length - 1 && loop) {
						return prev + 1;
					}
					if (prev === carouselItems.length - 1) {
						return loop ? 0 : prev;
					}
					return prev + 1;
				});
			}, autoplayDelay);
			return () => clearInterval(timer);
		}
	}, [
		autoplay,
		autoplayDelay,
		isHovered,
		loop,
		items.length,
		carouselItems.length,
		pauseOnHover,
	]);

	const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

	const handleAnimationComplete = () => {
		if (loop && currentIndex === carouselItems.length - 1) {
			setIsResetting(true);
			x.set(0);
			setCurrentIndex(0);
			setTimeout(() => setIsResetting(false), 50);
		}
	};

	const handleDragEnd = (_, info) => {
		const offset = info.offset.x;
		const velocity = info.velocity.x;
		if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
			if (loop && currentIndex === items.length - 1) {
				setCurrentIndex(currentIndex + 1);
			} else {
				setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
			}
		} else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
			if (loop && currentIndex === 0) {
				setCurrentIndex(items.length - 1);
			} else {
				setCurrentIndex((prev) => Math.max(prev - 1, 0));
			}
		}
	};

	const dragProps = loop
		? {}
		: {
				dragConstraints: {
					left: -trackItemOffset * (carouselItems.length - 1),
					right: 0,
				},
		  };

	return (
		<div
			ref={containerRef}
			className={`image-carousel-container ${round ? "round" : ""}`}
			style={{
				width: `${baseWidth}px`,
				height: `${round ? baseWidth : itemHeight + 40}px`, // Add height for container
				...(round && { borderRadius: "50%" }),
			}}
		>
			<motion.div
				className="image-carousel-track"
				drag="x"
				{...dragProps}
				style={{
					width: itemWidth,
					height: itemHeight, // Set consistent height for track
					gap: `${GAP}px`,
					perspective: 1000,
					perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
					x,
				}}
				onDragEnd={handleDragEnd}
				animate={{ x: -(currentIndex * trackItemOffset) }}
				transition={effectiveTransition}
				onAnimationComplete={handleAnimationComplete}
			>
				{carouselItems.map((item, index) => {
					const range = [
						-(index + 1) * trackItemOffset,
						-index * trackItemOffset,
						-(index - 1) * trackItemOffset,
					];
					const outputRange = [90, 0, -90];
					// eslint-disable-next-line react-hooks/rules-of-hooks
					const rotateY = useTransform(x, range, outputRange, { clamp: false });
					return (
						<motion.div
							key={index}
							className={`image-carousel-item ${round ? "round" : ""}`}
							style={{
								width: itemWidth,
								height: itemHeight, // Consistent height for all items
								minHeight: itemHeight, // Ensure minimum height
								rotateY: rotateY,
								...(round && { borderRadius: "50%" }),
							}}
							transition={effectiveTransition}
						>
							{item.content ? (
								<div
									className="image-carousel-item-content"
									style={{
										padding: "20px",
										display: "flex",
										flexDirection: "column",
										height: "100%",
										width: "100%", // Ensure content fills width
										justifyContent: "center",
										boxSizing: "border-box", // Include padding in size calculation
									}}
								>
									{item.content}
								</div>
							) : (
								<>
									<div className={`image-carousel-item-header ${round ? "round" : ""}`}>
										<span className="image-carousel-icon-container">
											{item.icon}
										</span>
									</div>
									<div className="image-carousel-item-content" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
										<div className="image-carousel-item-title">{item.title}</div>
										<div className="image-carousel-item-description" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
											{item.description}
										</div>
									</div>
								</>
							)}
						</motion.div>
					);
				})}
			</motion.div>
			<div className={`image-carousel-indicators-container ${round ? "round" : ""}`}>
				<div className="image-carousel-indicators">
					{items.map((_, index) => (
						<motion.div
							key={index}
							className={`carousel-indicator ${currentIndex % items.length === index ? "active" : "inactive"
								}`}
							animate={{
								scale: currentIndex % items.length === index ? 1.2 : 1,
							}}
							onClick={() => setCurrentIndex(index)}
							transition={{ duration: 0.15 }}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
