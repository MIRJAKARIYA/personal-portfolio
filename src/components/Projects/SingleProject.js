import React from 'react';

const SingleProject = ({project}) => {
    console.log(project)
    return (
        <div className="card bg-slate-900 text-white shadow-xl p-2">
            <figure>
              <img src={project.thumb} className="rounded-xl" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {project.pName}
                <div className="badge badge-secondary">{project.pType}</div>
              </h2>
              <p>
                {project.shortDes}
              </p>
              
              <div className='flex gap-4'>
                  <button className='btn btn-accent btn-sm flex-1'>Details</button>
              <a
                href={project.live}
                className="btn btn-warning btn-sm flex-1"
              >
                Live site
              </a>
              </div>
            </div>
          </div>
    );
};

export default SingleProject;