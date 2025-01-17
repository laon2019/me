import React from 'react';

const Cube = () => {
  return (
    <div>
      <div className="w-[200px] h-[200px] perspective-[1000px] my-[100px] mx-auto">
        <div className="w-full h-full relative preserve-3d animate-[rotateCube_5s_linear_infinite]">
          <div className="absolute flex flex-wrap w-full h-full translate-z-[100px]">
            <div style={{background: '#ff3d00'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffeb3b'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#4caf50'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#2196f3'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffffff'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffeb3b'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#4caf50'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#2196f3'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ff3d00'}} className="w-1/3 h-1/3 box-border border border-black" />
          </div>
          <div className="absolute flex flex-wrap w-full h-full rotate-y-180 translate-z-[100px]">
            <div style={{background: '#4caf50'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ff3d00'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffeb3b'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#2196f3'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffffff'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ff3d00'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffeb3b'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#4caf50'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#2196f3'}} className="w-1/3 h-1/3 box-border border border-black" />
          </div>
          <div className="absolute flex flex-wrap w-full h-full -rotate-y-90 translate-z-[100px]">
            <div style={{background: '#ffeb3b'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#4caf50'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#2196f3'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ff3d00'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffffff'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#4caf50'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#2196f3'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffeb3b'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ff3d00'}} className="w-1/3 h-1/3 box-border border border-black" />
          </div>
          <div className="absolute flex flex-wrap w-full h-full rotate-y-90 translate-z-[100px]">
            <div style={{background: '#4caf50'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ff3d00'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffeb3b'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#2196f3'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffffff'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ff3d00'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffeb3b'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#4caf50'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#2196f3'}} className="w-1/3 h-1/3 box-border border border-black" />
          </div>
          <div className="absolute flex flex-wrap w-full h-full rotate-x-90 translate-z-[100px]">
            <div style={{background: '#2196f3'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffeb3b'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ff3d00'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#4caf50'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffffff'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffeb3b'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ff3d00'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#4caf50'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#2196f3'}} className="w-1/3 h-1/3 box-border border border-black" />
          </div>
          <div className="absolute flex flex-wrap w-full h-full -rotate-x-90 translate-z-[100px]">
            <div style={{background: '#ffffff'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#4caf50'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#2196f3'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ff3d00'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffeb3b'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#4caf50'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#2196f3'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ffffff'}} className="w-1/3 h-1/3 box-border border border-black" />
            <div style={{background: '#ff3d00'}} className="w-1/3 h-1/3 box-border border border-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cube;
