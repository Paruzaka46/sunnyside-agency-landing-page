import { useMediaQuery } from "react-responsive"

const Content = () => {
    const desktop = useMediaQuery({query: '(min-width: 768px'})

    return (
        <div className={`grid ${desktop?'grid-cols-2':'grid-cols-1'}`}>
            <div className={`${desktop?null:'row-start-2'} md:text-left md:px-16 py-10 flex flex-col justify-center mobile:text-center mobile:px-8 mobile:py-14`}>
                <h2 className="md:text-[30px] lg:text-[35px] font-fraunces md:leading-8 lg:leading-[2.8rem] font-black text-vddes-blue mobile:text-[30px] mobile:leading-9">Transform your brand</h2>
                <p className="md:text-xs md:leading-5 font-barlow text-dg-blue py-5 lg:text-[15px] lg:leading-6 lg:py-7">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a className="text-vddes-blue uppercase font-fraunces md:text-xs lg:text-[15px] underline underline-offset-1 hover:decoration-my-yellow decoration-my-yellow/30 decoration-[5px] transition-all" href="#">&nbsp; Learn More &nbsp;</a>
            </div>
            <img className="w-[100%]" src={`/images/${desktop?'desktop':'mobile'}/image-transform.jpg`}/>
            <img className="w-[100%]" src={`/images/${desktop?'desktop':'mobile'}/image-stand-out.jpg`}/>
            <div className="md:px-16 md:text-left py-10 flex flex-col justify-center lg:px-30 mobile:text-center mobile:px-8 mobile:py-14">
                <h2 className="md:text-[30px] lg:text-[35px] font-fraunces md:leading-8 lg:leading-[2.8rem] font-black text-vddes-blue mobile:text-[30px] mobile:leading-9">Stand out to the right audience</h2>
                <p className="md:text-xs md:leading-5 font-barlow text-dg-blue py-5 lg:text-[15px] lg:leading-6 lg:py-7">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <a className="text-vddes-blue uppercase font-fraunces md:text-xs lg:text-[15px] underline underline-offset-0 hover:decoration-soft-red decoration-soft-red/30 decoration-[5px] transition-all" href="#">&nbsp; Learn More &nbsp;</a>
            </div>

            <div className="relative md:bg-gh-desktop bg-contain bg-no-repeat w-[100%] md:pb-[83.33%] mobile:bg-gh-mobile mobile:pb-[160%]">
                <div className="absolute text-center md:top-[60%] mobile:top-[70%]">
                    <h3 className="md:text-[22px] font-fraunces mb-3 text-graphic-design font-black mobile:text-[28px]">Graphic Design</h3>
                    <p className="md:px-[5rem] md:text-[12px] font-barlow text-graphic-design mobile:px-5 mobile:text-[16px]">
                    Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                    </p>
                </div>
            </div>

            <div className="relative md:bg-ph-desktop bg-contain bg-no-repeat w-[100%] md:pb-[83.33%] mobile:bg-ph-mobile mobile:pb-[160%]">
                <div className="absolute text-center md:top-[60%] mobile:top-[70%]">
                    <h3 className="md:text-[22px] font-fraunces mb-3 text-graphic-design font-black mobile:text-[28px]">Photography</h3>
                    <p className="md:px-[5rem] md:text-[12px] font-barlow text-graphic-design mobile:px-5 mobile:text-[16px]">
                    Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Content