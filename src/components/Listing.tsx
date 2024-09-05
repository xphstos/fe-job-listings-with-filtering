import { For } from 'solid-js';
import { Listing as ListingT } from '../types';

interface ListingProps extends ListingT {
  onLanguageSelect: (arg: string) => void;
}

function Listing(props: ListingProps) {
  return (
    <article class="rounded-lg border-l-8 border-[transparent] bg-white px-6 pb-6 pt-0 shadow-xl shadow-cyan-400/20 transition-all focus-within:border-cyan-400 group-hover:shadow-md group-hover:shadow-cyan-400/20 hocus:border-cyan-400 hocus:!shadow-xl hocus:!shadow-cyan-400/20 md:flex md:items-center md:gap-6 md:px-10 md:py-6">
      <figure class="size-12 -translate-y-1/2 md:size-20 md:translate-y-0">
        <img src={props.logo} alt="" role="presentation" />
      </figure>
      <header class="border-b border-cyan-200 pb-4 md:border-none md:pb-0">
        <div class="flex -translate-y-2 items-center gap-4 md:translate-y-0">
          <h3 class="font-bold text-cyan-400">
            <span class="inline-block translate-y-[0.1em]">
              {props.company}
            </span>
          </h3>
          {props.featured || props.new ? (
            <ul class="flex items-center gap-2">
              {props.new && (
                <li class="rounded-full bg-cyan-400 px-2 py-1 text-center text-sm font-bold uppercase text-white">
                  <div class="translate-y-[.115em] leading-none">NEW</div>
                </li>
              )}
              {props.featured && (
                <li class="rounded-full bg-cyan-500 px-2 py-1 text-center text-sm font-bold uppercase text-white">
                  <div class="translate-y-[.115em] leading-none">FEATURED</div>
                </li>
              )}
            </ul>
          ) : null}
        </div>
        <h4 class="mb-1 font-bold text-cyan-500 transition-colors hocus-visible:text-cyan-400 md:mb-0 md:mt-1">{`${props.position}`}</h4>
        <div class="flex items-center gap-2">
          <span class="text-cyan-300">{props.postedAt}</span>
          <span class="aspect-square size-1 rounded-full bg-cyan-300" />
          <span class="text-cyan-300">{props.contract}</span>
          <span class="aspect-square size-1 rounded-full bg-cyan-300" />
          <span class="text-cyan-300">{props.location}</span>
        </div>
      </header>
      <ul class="flex flex-wrap gap-4 pt-4 md:ml-auto">
        <For each={[...props.languages, props.level]}>
          {(lang) => (
            <li>
              <button
                onClick={() => props.onLanguageSelect(lang)}
                type="button"
                class="rounded bg-cyan-200 p-2 text-center text-cyan-400 transition-colors hocus-visible:bg-cyan-400 hocus-visible:text-white"
              >
                <div class="translate-y-[.125em] leading-none">{lang}</div>
              </button>
            </li>
          )}
        </For>
      </ul>
    </article>
  );
}

export default Listing;
