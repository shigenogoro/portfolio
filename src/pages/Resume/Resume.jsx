import './Resume.css';
import Card from '../../components/Card/Card'
import umassLogo from '../../assets/logo/umass_seal.png';
import nthuLogo from "../../assets/logo/nthu_logo.png";
import ndhuLogo from "../../assets/logo/ndhu_logo.png";
import fan2seeLogo from "../../assets/logo/fan2see_logo_big_crop.png"
import giantsLogo from "../../assets/logo/hualien_giants.png"

const Resume = () => {
    const umassDes = [
        "M.S. in Computer Science | 2026"
    ];
    const nthuDes = [
        "M.S. in Physics (GPA: 4.04/4.3) | 2023",
        "Thesis/Dissertation Topic: Study of Epitaxial Growth of TiₓAl₍₁₋ₓ₎N by Plasma Assisted Molecular Beam Epitaxy"
    ];
    const ndhuDes = [
        "BS in Electrical Engineering minor in Computer Science (GPA: 4.11/4.5) | 2020",
        "Sheng-Kai Wen, Wei Chi LU, Chun-Chieh Lin: Resistive Switching Memory Device Composed of an Organic Material - Silver Fungus. Poster presented at IEDMS  | 2019",
        "President of NDHU Toastmasters Club | 2017-2018",
        "Received “The Award of Outstanding Academic Performance” (ranked 3ʳᵈ in dept.) | 2017",
        "TA for Electronic Circuit(I), Microelectronic(I), Digital Logic Design, Semiconductor Devices, Electronic Circuits Lab(I)(II)",
    ];
    const fan2seeDes = ["Co-founder, Full Stack Engineer | 2021-2022"]
    const giantsDes = [
        "Inline Hockey Coach, Hualien County | 2017-2020",
    ]

    return (
        <div>
            <h2 className="page-title">Resume</h2>
            <section className="sec-container">
                <h3 className="sec-title">Education</h3>
                <Card 
                    title="University of Massachusetts Amherst" 
                    descriptions={umassDes}
                    imgSrc={umassLogo}
                    imgAlt="UMass Logo"
                />

                <Card 
                    title="National Tsing Hua University" 
                    descriptions={nthuDes}
                    imgSrc={nthuLogo}
                    imgAlt="NTHU Logo"
                />

                <Card 
                    title="National Dong Hwa University" 
                    descriptions={ndhuDes}
                    imgSrc={ndhuLogo}
                    imgAlt="NDHU Logo"
                />
            </section>

            <section className="sec-container">
                <h3 className="sec-title">Work Experience</h3>
                <Card 
                    title="Fan2see - Personalized Video Message from Your Favorite Star"
                    descriptions={fan2seeDes}
                    imgSrc={fan2seeLogo}
                    imgAlt="Fan2see Logo"
                />

                <Card 
                    title="Hualien Giants Hockey Club"
                    descriptions={giantsDes}
                    imgSrc={giantsLogo}
                    imgAlt="Hualien Giants' Logo"
                />
            </section>

            {/* <section className="sec-container">
                <h3 className="sec-title">Selected Project</h3>
            </section> */}
        </div>
    )
}

export default Resume;