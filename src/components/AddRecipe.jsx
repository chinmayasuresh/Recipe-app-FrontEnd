import React from 'react'

const AddRecipe = () => {
return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"><b>RECIPE TITLE</b></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label"><b>RECIPE IMAGE</b></label>
                                <input type="file" name="" id="" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label"><b>DESCRIPTION</b></label>
                                <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"><b>CATEGORY</b></label>
                                <select name="" id="" className="form-control">
                                    <option value="">VEG</option>
                                    <option value="">NON-VEG</option>
                                </select>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"><b>PREPARED BY</b></label>
                                <input type="text" className="form-control" />
                            </div>


                     
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success"><b>SUBMIT</b></button>
                                </div>
                            </div>
                
                    </div>
                </div>
            </div>
</div>
)
}

export default AddRecipe