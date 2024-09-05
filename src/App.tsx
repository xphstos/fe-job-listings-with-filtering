import { createMemo, createSignal, For } from 'solid-js';
import { Listing as ListingT } from './types';
import listings from './_data/listings';
import Listing from './components/Listing';
import IconRemove from './components/icons/Remove';

function App() {
  const [jobListings] = createSignal<Array<ListingT>>(listings);
  const [filters, setFilters] = createSignal<Array<string>>([]);

  const filteredJobListings = createMemo(() => {
    if (filters().length === 0) {
      return jobListings();
    }

    const filtered = jobListings().filter((listing) =>
      filters().every((lang) =>
        [...listing.languages, listing.level].includes(lang)
      )
    );

    return filtered;
  });

  const addFilter = (name: string) => {
    if (!filters().includes(name)) {
      setFilters([...filters(), name]);
    }
  };

  const removeFilter = (name: string) => {
    setFilters((languages) => languages.filter((l) => l !== name));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <main class="bg-main px-6 py-[10rem]">
      {filters().length && (
        <aside class="mx-auto flex max-w-[69rem] -translate-y-1/2 items-center justify-between gap-4 rounded-lg bg-white px-10 py-5 opacity-100 shadow-xl shadow-cyan-400/20 transition-all">
          <ul class="flex flex-wrap items-center gap-3">
            <For each={filters()}>
              {(filter) => {
                return (
                  <li class="flex items-center overflow-hidden rounded-md bg-cyan-200 leading-none">
                    <span class="translate-y-[.125em] px-2 font-bold">
                      {filter}
                    </span>
                    <button
                      type="button"
                      class="flex aspect-square shrink-0 bg-cyan-400 p-2 transition-colors hocus:bg-cyan-500"
                      onClick={() => removeFilter(filter)}
                    >
                      <IconRemove class="mx-auto size-[.75em] text-white" />
                    </button>
                  </li>
                );
              }}
            </For>
          </ul>
          <button
            class="p-3 text-cyan-400 hocus:underline"
            type="button"
            onClick={clearFilters}
          >
            Clear
          </button>
        </aside>
      )}
      <section
        class="mx-auto mt-10 max-w-[69rem]"
        classList={{
          'mt-16 md:mt-10': filters().length === 0
        }}
      >
        <ul class="group space-y-10 md:space-y-6">
          <For each={filteredJobListings()}>
            {(listing) => {
              return (
                <li>
                  <Listing
                    onLanguageSelect={(lang) => addFilter(lang)}
                    {...listing}
                  />
                </li>
              );
            }}
          </For>
        </ul>
      </section>
    </main>
  );
}

export default App;
