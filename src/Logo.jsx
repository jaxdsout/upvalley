function Logo () {

    return (
        <div className='select-none text-center py-5'>
            <p className="font-semibold text-[2rem] text-white -mb-1">
                <span className="text-[#f87f23]">Up</span>Valley Electric
            </p>
            <svg width="260" height="6" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="3" x2="256" y2="3" stroke="#ADADAD" strokeWidth="3" />
            </svg>
            <svg width="260" height="6" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="3" x2="256" y2="3" stroke="#f87f23" strokeWidth="3" />
            </svg>
            <p className="font-semibold  text-xs tracking-[0.4rem] text-white">ST. HELENA, CA</p>
        </div>
    )
}

export default Logo