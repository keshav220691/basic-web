export default function About() {
    return (
        <div className="h-screen py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        One of the key features of my website is the implementation of React Routing. This powerful library allows for a smooth and intuitive navigation experience. Users can effortlessly browse through various sections of the site, such as the home page, product listings, detailed product views, and the shopping cart, all without the need for full page reloads.
                        </p>
                        <p className="mt-4 text-gray-600">
                        This not only enhances the speed and performance of the website but also provides a more enjoyable user experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}