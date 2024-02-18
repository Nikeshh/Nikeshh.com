import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ServiceDetail() {
  return (
    <div
      className={cn(`relative hidden h-screen border-r pt-16 lg:block w-96`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Nikeshh.
            </h2>
          </div>
          <div className="mt-6 px-4">
            <h3 className="underline">Business Objective</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maxime omnis placeat, et quidem nostrum exercitationem dolore inventore rem, aut laborum veniam quo. Sunt, magni voluptatem! Nulla minima in tenetur!</p>
          </div>
          <div className="mt-6 px-4">
            <h3 className="underline">Solution</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores cupiditate, perferendis alias quaerat eos. Veniam eaque reprehenderit quibusdam praesentium quisquam beatae! Aliquam accusamus sunt cum voluptatum, doloremque vitae cumque.</p>
          </div>
          <div className="mt-6 px-4">
            <h3 className="underline">Setup</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {['SAAS', 'Full Stack', 'UI/UX', 'Android', 'iOS'].map((a) => {
                return (
                  <Badge variant='default' key={a}>
                    <a
                      className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <span className='text-white transition'>
                        {a}
                      </span>
                    </a>
                </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}