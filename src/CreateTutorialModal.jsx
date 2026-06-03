const CreateTutorialModal = () => {
    return ( 
        <div onClick={(e)=>{e.stopPropagation()}} className="border border-gray-300 bg-white w-[30%] h-[40vh] fixed top-1/2 left-1/2 -translate-x-1/2 z-100 -translate-y-1/2">
            <div>
                <p>Create tutorial</p>
            </div>
        </div>
     );
}
 
export default CreateTutorialModal;