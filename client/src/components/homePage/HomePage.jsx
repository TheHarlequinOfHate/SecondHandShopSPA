import { useNavigate } from "react-router-dom"

export default function  Home() {
    const navigate = useNavigate()

    const menButtonHandler = () => {
        navigate('/menclothes')
    }

    const womenButtonHandler = () => {
        navigate('/womenclothes')
    }

    return (
        <>
            
            <div className="flex h-screen flex-col"> 
                <div className="flex justify-center bg-blue-light h-7/12">
                    <img className="flex h-full  w-3/12" src="https://media.istockphoto.com/id/488027919/photo/the-carefree-days.jpg?s=612x612&w=0&k=20&c=Q1ily0wQgzM8rq3OFynTWnEDlDWhP5jNIyt9tOPo__E="/>
                    <div className="flex flex-col bg-cool-blue w-3/12 ">
                        <span className="flex mt-32 text-2xl font-semibold font-serif justify-center">HOP IN THE SUMMER</span>
                        <span className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></span>
                        <button onClick={menButtonHandler} className="flex mt-3 text-2xl font-semibold font-serif justify-center hover:scale-75">SHOP MEN</button>
                    </div>
                </div>
                <div className="flex justify-center bg-coral grow h-full">
                    <div className="flex flex-col bg-light-coral w-3/12 ">
                        <span className="flex mt-20 text-2xl font-semibold font-serif justify-center">HOP IN THE SUMMER</span>
                        <span className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></span>
                        <button onClick={womenButtonHandler} className="flex mt-3 text-2xl font-semibold font-serif justify-center hover:scale-75">SHOP WOMEN</button>
                    </div>
                    <img className="flex h-full  w-3/12" src="https://cdn.shopify.com/s/files/1/0573/2689/5255/files/2150360982_1_600x600.jpg?v=1713725903"/>
                </div>
            </div>

        </>

    )
}