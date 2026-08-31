import { motion, useMotionValue, useSpring } from "framer-motion"

export default function MouseGlow() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springX = useSpring(mouseX, {
        stiffness: 120,
        damping: 20
    })

    const springY = useSpring(mouseY, {
        stiffness: 120,
        damping: 20
    })

    const handleMouseMove = (event) => {
        mouseX.set(event.clientX)
        mouseY.set(event.clientY)
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className="pointer-events-none fixed inset-0 z-[9999]">
            <motion.div
                style={{
                    x: springX,
                    y: springY
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2">
                <div className="h-32 w-32 rounded-full bg-red-600/10 blur-[70px]" />
            </motion.div>
        </div>
    )
}
