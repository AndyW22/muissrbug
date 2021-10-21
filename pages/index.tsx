import { CardContainer, LinkTag, Tag } from '../styles/TestStyles';
export default function Home() {
  return (
    <div>
      <LinkTag href={'/test'} passHref>
        <Tag>
          <CardContainer elevation={10}></CardContainer>
        </Tag>
      </LinkTag>
      The paper component has transition, and curves. If you do a yarn build &&
      yarn start, and then click on the component, it will bring you to another
      page with the same component but wont look the same. Using a simple a tag
      <a href='/test'>it will work</a>
    </div>
  );
}
