import React from 'react';

const Hamster = () => {
  return (
    <div className="relative">
      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="relative w-48 h-48 text-sm [--dur:1s]">
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[radial-gradient(100%_100%_at_center,hsla(0,0%,60%,0)_47.8%,hsl(0,0%,60%)_48%)] z-[2]" />
        <div className="absolute top-1/2 left-[calc(50%-3.5em)] w-28 h-[3.75em] transform rotate-[4deg] translate-x-[-0.8em] translate-y-[1.85em] origin-[50%_0] z-[1] animate-[hamster_var(--dur)_ease-in-out_infinite]">
          <div className="absolute top-1 left-8 w-[4.5em] h-12 rounded-[50%_30%_50%_30%/15%_60%_40%_40%] bg-[hsl(30,90%,90%)] shadow-[0.1em_0.75em_0_hsl(30,90%,55%)_inset,0.15em_-0.5em_0_hsl(30,90%,80%)_inset] origin-[17%_50%] preserve-3d animate-[hamsterBody_var(--dur)_ease-in-out_infinite]">
            <div className="absolute top-0 -left-8 w-[2.75em] h-10 rounded-[70%_30%_0_100%/40%_25%_25%_60%] bg-[hsl(30,90%,55%)] shadow-[0_-0.25em_0_hsl(30,90%,80%)_inset,0.75em_-1.55em_0_hsl(30,90%,90%)_inset] origin-[100%_50%] animate-[hamsterHead_var(--dur)_ease-in-out_infinite]">
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[hsl(0,90%,85%)] shadow-[-0.25em_0_hsl(30,90%,55%)_inset] origin-[50%_75%] animate-[hamsterEar_var(--dur)_ease-in-out_infinite]" />
              <div className="absolute top-[0.375em] left-5 w-2 h-2 rounded-full bg-black animate-[hamsterEye_var(--dur)_linear_infinite]" />
              <div className="absolute top-3 left-0 w-[0.2em] h-1 rounded-[35%_65%_85%_15%/70%_50%_50%_30%] bg-[hsl(0,90%,75%)]" />
            </div>
            <div className="absolute top-8 left-2 w-4 h-6 bg-[linear-gradient(hsl(30,90%,80%)_80%,hsl(0,90%,75%)_80%)] clip-path-[polygon(0_0,100%_0,70%_80%,60%_100%,0%_100%,40%_80%)] origin-[50%_0] rotate-[15deg] -z-[1] animate-[hamsterFRLimb_var(--dur)_linear_infinite]" />
            <div className="absolute top-8 left-2 w-4 h-6 bg-[linear-gradient(hsl(30,90%,90%)_80%,hsl(0,90%,85%)_80%)] clip-path-[polygon(0_0,100%_0,70%_80%,60%_100%,0%_100%,40%_80%)] origin-[50%_0] rotate-[15deg] animate-[hamsterFLLimb_var(--dur)_linear_infinite]" />
            <div className="absolute top-4 left-[2.8em] w-6 h-10 rounded-t-3xl bg-[linear-gradient(hsl(30,90%,80%)_90%,hsl(0,90%,75%)_90%)] clip-path-[polygon(0_0,100%_0,100%_30%,70%_90%,70%_100%,30%_100%,40%_90%,0%_30%)] origin-[50%_30%] -rotate-[25deg] -z-[1] animate-[hamsterBRLimb_var(--dur)_linear_infinite]" />
            <div className="absolute top-4 left-[2.8em] w-6 h-10 rounded-t-3xl bg-[linear-gradient(hsl(30,90%,90%)_90%,hsl(0,90%,85%)_90%)] clip-path-[polygon(0_0,100%_0,100%_30%,70%_90%,70%_100%,30%_100%,40%_90%,0%_30%)] origin-[50%_30%] -rotate-[25deg] animate-[hamsterBLLimb_var(--dur)_linear_infinite]" />
            <div className="absolute top-6 -right-2 w-4 h-2 rounded-[0.25em_50%_50%_0.25em] bg-[hsl(0,90%,85%)] shadow-[0_-0.2em_0_hsl(0,90%,75%)_inset] origin-[0.25em_0.25em] rotate-[30deg] -z-[1] animate-[hamsterTail_var(--dur)_linear_infinite]" />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[radial-gradient(100%_100%_at_center,hsl(0,0%,60%)_4.8%,hsla(0,0%,60%,0)_5%),linear-gradient(hsla(0,0%,55%,0)_46.9%,hsl(0,0%,65%)_47%_52.9%,hsla(0,0%,65%,0)_53%)_50%_50%/99%_99%_no-repeat] animate-[spoke_var(--dur)_linear_infinite]" />
      </div>
    </div>
  );
}

export default Hamster;
