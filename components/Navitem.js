
const NavItem = ({ children, menuLabel }) => {
    return <li className="group relative py-4 px-6 border-b list-none lg:border-none lg:mx-8 hover:text-gray-300 dropdown lg:px-4 ">
        <a>{menuLabel}</a>
        {children && <div className="group-hover:block group-hover:transition-all dropdown-menu absolute h-auto hidden">
            <ul className="bg-jade p-2 z-50 w-full sticky left-2/4 lg:w-max lg:top-0 lg:px-2 lg:mt-4 lg:left-2/4 lg:right-auto lg:text-center lg:-translate-x-2/4 rounded-lg lg:backdrop-blur-xl lg:bg-jade/30">
                {children}
            </ul>
        </div>}
    </li>
}

const NavSubitem = (props) => {
    return <div className="flex items-center text-base lg:text-lg py-2 cursor-pointer">
        <div className={`flex hover:text-white p-2  ${!props.submenuTitle ? "flex-1" : "bg-slate-600 rounded-full"}`}>{props.Component}</div>
        {props.submenuTitle && <div className="flex flex-col items-start ml-4">
            <p className="text-white">{props.submenuTitle}</p>
            {props.submenuSubtitle && <p className="text-sm text-slate-300 text-start">{props.submenuSubtitle}</p>}
        </div>}
    </div>
}

export { NavSubitem, NavItem };
