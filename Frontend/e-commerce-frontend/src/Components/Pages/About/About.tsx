import { FC } from "react";
import { Navbar } from "../../Common/Navbar/Navbar"
import { AboutContainer, AboutTitle, ContentGrid, Description, Image } from "./About.css";
import tamplarie from "../../../Assets/Images/tamplarie.jpg";
export const About: FC = () => {
    return (
        <AboutContainer>
            <Navbar />
            <AboutTitle>Despre noi</AboutTitle>
            <ContentGrid>
                <Image src={tamplarie} alt={tamplarie} />
                <Description>
                    Suntem un atelier de tâmplărie cu o experiență vastă în producția de mobilier și obiecte din lemn. De-a lungul anilor, am reușit să construim o echipă de meșteri pricepuți și pasionați de tâmplărie, care își aduc contribuția la realizarea unor lucrări de calitate superioară.
                Folosim cele mai bune materiale pentru a produce mobilier durabil și estetic, care să reziste în timp. Avem o gamă largă de opțiuni pentru fiecare produs, astfel încât să putem satisface nevoile și preferințele clienților noștri. În plus, oferim servicii personalizate pentru a crea mobilier unic și adaptat nevoilor dumneavoastră.
                Suntem mândri să spunem că suntem o companie ecologică, iar toate produsele noastre sunt fabricate cu lemn provenit din surse sustenabile. În plus, folosim tehnologii moderne pentru a reduce impactul asupra mediului și pentru a îmbunătăți eficiența producției.
                Clienții noștri sunt întotdeauna pe primul loc și ne străduim să oferim o experiență plăcută și satisfacție totală. Fie că aveți nevoie de un mobilier la comandă sau doriți să restaurați un obiect vechi, suntem aici să vă ajutăm și să vă oferim cele mai bune soluții.
                În concluzie, suntem un atelier de tâmplărie pasionat de ceea ce facem, iar scopul nostru este de a crea mobilier de cea mai bună calitate, personalizat și durabil. Ne bucurăm să vă întâlnim și să discutăm despre proiectele dumneavoastră.
                </Description>
            </ContentGrid>
        </AboutContainer>
      
    );
}