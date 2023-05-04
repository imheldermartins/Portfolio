export default function Quote({children}) {
    return (
        <div className="w-full bg-slate-200 text-slate-600 py-8">
            <div className="w-4/5 m-auto text-base md:text-lg">
                {children}
            </div>
        </div>)
}