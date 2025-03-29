import { CardProject } from "../CardProject";
import { Container } from "../Container";

export function SectionProjects() {
  return (
    <Container className="flex flex-col">
      <span className="sm:text-4xl text-3xl  text-dark-text-primary sm:font-medium py-10">
        Projetos
      </span>
      <CardProject text="Lorem ipsun hahsdahhsdhasdka sd aks d" img="https://dummyimage.com/600x400/000/fff" link="https://dummyimage.com/600x400/000/fff"  title="Projeto1"/>
    </Container>
  );
}
