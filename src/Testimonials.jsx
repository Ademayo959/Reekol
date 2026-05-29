import man from "./assets/man.jpeg"
import female from "./assets/female.jpeg"
import uche from "./assets/Uche.jpeg"

const Testimonials = () => {
    return ( 
        <div className="font-bricolage bg-gray-100 py-18 border-y border-gray-300">
            <div className="max-w-6xl mx-auto">
                <p className="text-green text-[62px] text-center max-sm:leading-15 max-sm:text-[3.5rem] max-sm:my-4">Loved by students.</p>
                <p className="text-gray-600 text-center w-140 justify-self-center max-sm:w-80">Don't just take our word for it, see what others students are saying.</p>
                <div className="grid grid-cols-3 my-18 max-sm:grid-cols-1 max-sm:justify-self-center max-sm:gap-6">
                    <div className="border border-gray-200 shadow-md w-80 p-7 grid gap-3 rounded-3xl">
                       <p className="text-green">"Reekol completely saved me this semester, I found a last minute MTH 201 tutorial that covered exactly what came out in the exam. Best Decision ever."</p>
                       <div className="flex items-center gap-2">
                            <div>
                              <img src={man} alt="" className="h-10 w-10 border border-gray-300 rounded-full object-cover"/>  
                            </div>
                            <div>
                                <p className="font-brocilage-bold font-extrabold text-green">Adegboye Ibrahim</p>
                                <p className="text-gray-500">Engineering OAU</p>
                            </div>
                       </div>
                    </div>
                    <div className="border border-gray-200 shadow-md w-80 p-7 grid gap-3 rounded-3xl">
                        <p className="text-green">"As a tutor, I've been able to reach way more students. The location verification feature means people actually show up. Highly recommend."</p>
                       <div className="flex items-center gap-2">
                            <div>
                              <img src={uche} alt="" className="h-10 w-10 border border-gray-300 rounded-full object-cover"/>  
                            </div>
                            <div>
                                <p className="font-brocilage-bold font-extrabold text-green">Chimammanda Efua</p>
                                <p className="text-gray-500">Medecine UNILAG</p>
                            </div>
                       </div>
                    </div>
                    <div className="border border-gray-200 shadow-md w-80 p-7 grid gap-3 rounded-3xl">
                        <p className="text-green">"I was panicking the night before my stats exam and found a group meeting in 20 minutes. Passed with a B+. Reekol is genuinely a lifesaver."</p>
                       <div className="flex items-center gap-2">
                            <div>
                              <img src={female} alt="" className="h-10 w-10 border border-gray-300 rounded-full object-cover"/>  
                            </div>
                            <div>
                                <p className="font-brocilage-bold font-extrabold text-green">Eloise Parker</p>
                                <p className="text-gray-500">Robotics UCT (CapeTown)</p>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Testimonials;