import React from 'react'
import Gambar from "../../img/tlm.png";
import styled from "./tlmvokasi.css";

export default function TlmVokasi() {
  return (
    <div>
        <section id="tlm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                    <div className="row">
                    <img src={Gambar} alt="" className="img-fluid w-75 mx-auto"/>
                        <p className="mt-3 ps-5 pe-5"mt-5 >
                            Nilai-nilai ke depan yang akan dijunjung ITL. Trisakti untuk bereputasi global adalah: <br />
                            1. Quality. <br />
                            2. Unity in Diversity <br />
                            3. Patriotic <br />
                            4. Sclentific Value <br />
                            5. Integrity <br />
                            6. Entreprenuer. <br />
                            7. Adversity. <br /> <br />

                            Nilai-nilai dasar ITL Trisakti dalam bidang <span className='bold'>Manajemen Transpotasi dan Bisnis. 
                            Transportasi dan Logistik</span> serta bidang teknik pada <span className='bold'>mutu (Quality)</span> 
                            dan <span className='bold'>persatuan (Unity in Diversity)</span>, serta <span className='bold'>siap 
                            berkorban (Patriotic)</span>. Selanjutnya <span className='bold'>nilai ilmiah (Scientific Value), 
                            integritas (Integrity) dan kewirausaan (Entreprenuer)</span> akan menjadi sasaran yang ingin di 
                            capai dengan kemampuan bekerja di bawah tekanan dengan <span className='bold'>kemandirian/ketahanmalangan 
                            (Adversity)</span>.
                            Nilai dasar ini merupakan pasangan dari kode etik The Triple 3 ITL Trisakti untuk 
                            membangun Karakter, Sikap dan Perilaku seperti terlihat dalam gambar yaitu dalam: <br /> <br />
                            
                            1. 1st Triple "Leadership" - Niat baik Komitmen yang kuat dan Respon dan Tindakan 
                            yang cepat: (Ist Triple 'Leadership" ㆍ Good wilingness Strong Commitment, and 
                            Quick Response and Action); <br /><br />
                            
                            2. 2nd Triple 'Solidarity'- kepedulian, keadilan dan berbagi: (2nd Triple 
                            "Solidarity"'- Care, fair and Share) <br /><br />
                            
                            3. 3rd Triple 'Academkc/Transformational Approach"- Kreatif. Inovatifdan Produktif. 
                            (3nd Triple "Academic/Transformational Approach" - Creative, Innowative and Productive). <br /><br />   
                        </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
