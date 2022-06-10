import React from "react";

const DetailModal = ({modalData}) => {
    console.log(modalData)
    const {live, pName, pType, pFeat, thumb, shortDes} = modalData;
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-xl mb-4">
            {pName} <span className="text-red-700">{`(${pType})`}</span>
            <a rel="noreferrer" target='_blank' href={live} className="btn btn-xs ml-4 btn-outline btn-primary">visit website</a>
          </h3>
          <div className="grid grid-cols-3 gap-2">
              <img src={thumb} alt="" />
              <img src={thumb} alt="" />
              <img src={thumb} alt="" />
          </div>
          <p className="py-4 mt-2 text-primary font-semibold">
            {shortDes}
          </p>
          <p className="text-xl font-semibold text-red-700">Features</p>
          <ul className="list-disc list-inside">
              {
                  pFeat.map(p => <li className="ml-4">{p}</li>)
              }
          </ul>
          
          <div className="modal-action">
            
            <label htmlFor="my-modal-5" className="btn">
              close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailModal;
