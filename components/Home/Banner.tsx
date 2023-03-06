import React, { FC } from "react";

interface BannerParams {
	image: string[];
	url: string[];
}

const Banner: FC<BannerParams> = props => {
	const { image, url } = props;
	return (
		<>
			<div className="container mx-auto">
				<div className="flex flex-wrap">
					<div className="left flex basis-full md:basis-2/3 flex-col p-3">
						<div className="top-banner relative group">
							<div className="overlay absolute hidden group-hover:block w-full h-full bg-black opacity-30"></div>
							<h3 className="text-2xl absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
								Toys & Games
							</h3>
							<img
								className="w-full h-full"
								src="https://htmldemo.net/fiora/fiora/img/banner-1.jpg"
								alt="top-banner"
							/>
						</div>
						<div className="bottom-banner flex md:flex-row flex-wrap m-3">
							<div className="relative group bottom-left basis-full md:basis-1/2">
								<div className="overlay absolute hidden group-hover:block w-full h-full bg-black opacity-30"></div>
								<h3 className="text-2xl absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
									Toys &
									Games
								</h3>
								<img
									className="w-full h-full"
									src="https://htmldemo.net/fiora/fiora/img/banner-2.jpg"
									alt="bottom-left"
								/>
							</div>
							<div className="relative group bottom-right basis-full md:basis-1/2">
              <div className="overlay absolute hidden group-hover:block w-full h-full bg-black opacity-30"></div>
              <h3 className="text-2xl absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Toys & Games</h3>
								<img
									className="w-full h-full"
									src="https://htmldemo.net/fiora/fiora/img/banner-3.jpg"
									alt="bottom-right"
								/>
							</div>
						</div>
					</div>
					<div className="right relative group flex basis-full md:basis-1/3 justify-center">
						<div className="overlay absolute hidden group-hover:block w-full h-full bg-black opacity-30"></div>
						<h3 className="text-2xl absolute hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							Toys & Games
						</h3>
						<img
							src="https://htmldemo.net/fiora/fiora/img/banner-4.jpg"
							alt="right-banner"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
