import {
  redirect,
  type ActionArgs,
  type V2_MetaFunction,
} from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const json = Object.fromEntries(formData);
  console.log(json);

  return redirect("/");
}

export default function Index() {
  return (
    <div className="p-10">
      <h1 className="text-5xl">Hello, DiscoverMe User!</h1>
      <p className="mt-2 text-lg text-gray-400">
        Learnings and doings. Updated weekly
      </p>

      <div className="mt-8 border p-3">
        <Form method="post">
          <p className="italic">create an entry</p>

          <div>
            <div className="mt-4">
              <input type="date" name="date" className="text-gray-700" />
            </div>

            <div className="mt-2 space-x-6">
              <label>
                <input
                  type="radio"
                  name="category"
                  value="work"
                  className="mr-1"
                />
                Work
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  value="learning"
                  className="mr-1"
                />
                Learning
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  value="interesting-thing"
                  className="mr-1"
                />
                Interesting Thing
              </label>
            </div>

            <div className="mt-2">
              <textarea name="text" className="w-full text-gray-700"></textarea>
            </div>
            <div className="mt-2 text-right">
              <button className="bg-blue-500 px-4 py-1 text-blue-50">
                Save
              </button>
            </div>
          </div>
        </Form>
      </div>

      <div className="mt-4">
        <p className="font-bold">Week of April 10</p>
        <div className="mt-4 space-y-4">
          <div>
            <p>Work</p>
            <ul className="ml-8 list-disc">
              <li>first item</li>
              <li>second item</li>
            </ul>
          </div>
          <div>
            <p>Learnings</p>
            <ul className="ml-8 list-disc">
              <li>first item</li>
              <li>second item</li>
            </ul>
          </div>
          <div>
            <p>Interesting things</p>
            <ul className="ml-8 list-disc">
              <li>first item</li>
              <li>second item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
