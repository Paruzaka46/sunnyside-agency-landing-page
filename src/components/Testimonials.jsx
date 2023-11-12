const Testimonials = () => {
    const clients = [
        {
            image: "/images/image-emily.jpg",
            comment: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
            name: "Emily R.",
            position: "Marketing Director"
        },
        {
            image: "/images/image-thomas.jpg",
            comment: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
            name: "Thomas S.",
            position: "Chief Operating Officer",
        },
        {
            image: "/images/image-jennie.jpg",
            comment: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
            name: "Jennie F.",
            position: "Business Owner"
        }
    ]

    return (
        <div className="md:py-28 mobile:py-16">
            <h3 className="text-center uppercase text-[15px] font-fraunces text-g-blue tracking-[0.25rem] md:mb-20 font-black mobile:mb-12">Client Testimonials</h3>
            <div className="grid md:grid-cols-3 mobile:grid-cols-1 md:px-16 mobile:px-10">
                {clients.map((client, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center text-center md:mb-0 mobile:mb-14">
                            <img className="w-14 rounded-full" src={client.image}/>
                            <p className="md:py-12 md:text-xs text-vdg-blue font-barlow md:px-3 mobile:py-6">
                            {client.comment}
                            </p>
                            <div>
                                <p className="font-fraunces font-black text-vddes-blue pb-1">{client.name}</p>
                                <p className="text-xs font-barlow text-g-blue">{client.position}</p>
                            </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Testimonials