import React from 'react'

const Gender = ({onCheckboxChange,selectedGender}) => {
  return (
    <>
        <div className='flex'>
            <div className="form-control">
                <label className={`label cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text pr-2">Male</span> 
                    <input 
                        type="checkbox" 
                        className="checkbox" 
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`label cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text pr-2">Female</span> 
                    <input 
                        type="checkbox" 
                        className="checkbox" 
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    </>
  )
}

export default Gender