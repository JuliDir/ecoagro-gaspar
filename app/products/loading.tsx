export default function SkeletonProducts() {
    return (
        <div className="animate-pulse">
            <div className="h-64 bg-gray-200 rounded-md"></div>
            <div className="mt-4">
                <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-md w-1/2 mt-2"></div>
            </div>
        </div>
    )
}