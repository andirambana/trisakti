import React from "react";
import styled from "./kurimtl.css";
import Gambar1 from "../../img/kuri-mtl1.png";

export default function Kurimtl() {
	return (
		<div>
			<section id="kuri-mtl">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="card">
								<div className="card-body">
									<div className="card-title text-center">
										Kurikulum Pendidikan <br />
										<span className="judul-kuri">
											Manajemen Transportasi Laut
										</span>
									</div>
									<div className="row">
										<div className="col-md-12 mx-auto">
											<img src={Gambar1} alt="" className="img-fluid mb-5" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
