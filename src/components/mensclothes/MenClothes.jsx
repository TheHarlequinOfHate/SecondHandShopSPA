import Cards from "./itemCard";

export default function MenClothes(){
    return(
        <>
            <body className="justify-center bg-gradient-to-tr from-violet-200 to-pink-100 ">
                <h4 className="font-bold text-[30px] pb-2 pt-5 border-b border-violet-200 text-center bg-gradient-to-tr from-violet-200 to-pink-100 ">Men's Clothes</h4>
                    <div className="min-h-screen bg-gradient-to-tr from-violet-100 to-pink-50 p-4 ">
                        {/*cards starts from here */}
                        <div className="flex flex-row gap-4 flex-wrap p-20" >
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>

                        </div>
                       

                    </div>
            </body>
           
        </>

    )
}