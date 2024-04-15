import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div className="mt-5">
            <Helmet>
                <title>Cam Realty | About</title>
            </Helmet>
            <div className="bg-green-300 p-4 font-bold">
                <h2>CAM Realty – Who We Are:</h2>
            </div>
            <h2 className="text-xl font-bold my-2">Who we are and why you should choose CAM Realty? </h2>
            <p>CAM Realty is a local real estate company in Phnom Penh that specializes in finding perfect homes, furnished apartments, commercial space, and offices for expats. The business is founded by 2-siblings, Oeun Sitha, a Cambodian, co-founded and executively managed by Oeurn Theara, a Cambodian, since 2017.</p>

            <h2 className="text-base font-bold mt-6 mb-2">CAM Realty has a team of passionate young realtors who speak Khmer, English & Japanese. We offer extensive service – we find your new home, draft your lease agreement, make move arrangements, and retain the relationship during your whole tenancy in Cambodia. Our professional team strongly possesses:</h2>
            <ul className="space-y-2 list-disc p-4">
                <li>Market knowledge: Our team knows the local market inside and out, what properties are worth, what trends are driving the market, and what areas are hot.</li>
                <li>Negotiation skills: We are a team of expert negotiators who know how to get the best deal possible for our clients, whether they are renting, buying, leasing, or selling a property.</li>
                <li>Communication skills: We are excellent communicators. We can clearly explain the process to our clients and answer their questions in a concise and informative way. We effectively convey messages between our clients and landlords.</li>
                <li>Problem-solving skills: We are capable of solving problems quickly and efficiently. We respond and come up with flexibly creative solutions to any challenges that may arise.</li>
                <li>Technology skills: We are up-to-date on the latest technology in the real estate industry. We use technology to simplify the real estate process and make it easier for our clients.</li>
            </ul>
            <h2 className="text-2xl font-bold mt-4">Our Mission:</h2>
            <ol className="space-y-2 list-decimal p-6">
                <li>Be an outstanding partner with professional ethics for real estate owners and clients.</li>
                <li>To alter real estate services to be easier, better, and clearer.</li>
                <li>Bring clients and real estate owners to make the right and more accurate decisions.</li>
            </ol>
        </div>
    );
};

export default About;