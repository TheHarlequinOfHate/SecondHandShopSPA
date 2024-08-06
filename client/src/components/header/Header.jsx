import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

    
export default function Header(){
    const { isAuthenticated } = useContext(AuthContext)
    let pages = {}
    if(isAuthenticated){
        pages = [
            {name: 'Home', to:'/'},
            {name: 'Women', to:'/womenclothes'},
            {name: 'Men', to:'/menclothes'},
            {name: 'Sell', to:'/sell'},
            {name: 'Account', to:'/account'}
        ]
    } else {
        pages = [
            {name: 'Men', to:'/menclothes'},
            {name: 'Women', to:'/womenclothes'},
            {name: 'Home', to:'/'},
            {name: 'Log In', to:'/login'},
        ]
    }
    

    return (
        <>
            
            <nav className="bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow "> 
                <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1"  >
                    <div className="flex items-center felx-1">
                        <span className="text-3x1 font-bold"> Trift Shop</span>
                    </div>
                    <div className="lg:felx md:flex lg: flex-1 items center justify-end font-normal hidden">
                        <div className="flex-10">
                            <ul className="flex gap-8 mr-16 text-[18px]">
                                {pages.map((item) => (
                                <Link key={item.name}
                                to={item.to}                
                                >
                                    <li>{item.name}</li>
                                </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        
        </>

    )

}