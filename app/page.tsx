import { Foo } from "#lib/foo"
import { getBar } from "#lib/bar"

export default function Home() {
  return (
    <Foo>{getBar()}</Foo>
  );
}
