import { cn } from "@/shared/libs/css";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Switch } from "@/shared/ui/switch";
import { ChevronLeft } from "lucide-react";
import {
  ButtonHTMLAttributes,
  ChangeEventHandler,
  Children,
  createContext,
  FormEvent,
  FormEventHandler,
  HTMLInputTypeAttribute,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";

export interface SearchBackProps {
  className?: string;
  onClick?: () => unknown;
}

const SearchBack = (props: SearchBackProps) => {
  const className = cn(
    props.className,
    "flex-shrink-0 bg-transparent shadow-none mx-0 px-2"
  );
  return (
    <Button className={className} type="button" onClick={props.onClick}>
      <ChevronLeft size={16} className="text-gray-600" />
    </Button>
  );
};
const SearchBackType = "SearchBack" as const;
SearchBack.displayName = SearchBackType;

export interface SearchInputProps {
  type?: HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  className?: string;
}

const SearchInput = (props: SearchInputProps) => {
  const { ...others } = props;
  const className = cn(props.className, "w-full py-1");
  const { query, setQuery } = useContext(SearchContext);
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };
  return (
    <Input
      {...others}
      className={className}
      value={query}
      onChange={onChange}
    />
  );
};
const SearchInputType = "SearchInput" as const;
SearchInput.displayName = SearchInputType;

export interface SearchToggleProps {
  className?: string;
  label?: string;
}

const SearchToggle = (props: SearchToggleProps) => {
  const { checked, setChecked } = useContext(SearchContext);
  const { label } = props;
  const className = cn(
    props.className,
    "flex items-center gap-1 cursor-pointer select-none text-sm text-gray-600 w-full px-1"
  );
  return (
    <label className={className}>
      <Switch checked={checked} onCheckedChange={setChecked} />
      {label}
    </label>
  );
};
const SearchToggleType = "SearchToggle" as const;
SearchToggle.displayName = SearchToggleType;

export interface SearchButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  text?: string;
  className?: string;
}

const SearchButton = (props: SearchButtonProps) => {
  const { type, text, ...others } = props;
  const className = cn(props.className, "flex-shrink-0");
  return (
    <Button {...others} className={className} type={type}>
      {text}
    </Button>
  );
};
const SearchButtonType = "SearchButton" as const;
SearchButton.displayName = SearchButtonType;

export interface SearchContextInterface {
  query: string;
  setQuery: (query: string) => void;

  checked: boolean;
  setChecked: (checked: boolean) => void;
}

const SearchContext = createContext<SearchContextInterface>({
  query: "",
  setQuery: () => {},

  checked: false,
  setChecked: () => {},
});

export interface SearchProps extends PropsWithChildren {
  children: ReactNode;
  className?: string;
  defaultQuery?: string;
  defaultChecked?: boolean;
  onSubmit?: (
    event: FormEvent<HTMLFormElement>,
    data: { query: string; checked: boolean }
  ) => void;
}

const SearchMain = (props: SearchProps) => {
  const { children, defaultQuery = "", defaultChecked = false } = props;
  const components = Children.toArray(children) as JSX.Element[];
  const [query, setQuery] = useState(defaultQuery);
  const [checked, setChecked] = useState(defaultChecked);

  const back = components.find(
    (component) => component.type.displayName === SearchBackType
  );
  const input = components.find(
    (component) => component.type.displayName === SearchInputType
  );
  const toggle = components.find(
    (component) => component.type.displayName === SearchToggleType
  );
  const button = components.find(
    (component) => component.type.displayName === SearchButtonType
  );
  const className = cn(props.className, "w-full flex flex-col gap-2");
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    props.onSubmit?.(event, { query, checked });
  };
  return (
    <SearchContext.Provider value={{ query, setQuery, checked, setChecked }}>
      <form className={className} method="GET" onSubmit={onSubmit}>
        <div className="flex items-center gap-2 !p-1 w-full bg-white rounded-full shadow-sm border border-gray-100 focus-within:ring-2 focus-within:ring-primary-500 transition-all">
          {back}
          {input}
          {button}
        </div>
        {toggle}
      </form>
    </SearchContext.Provider>
  );
};

const Search = Object.assign(SearchMain, {
  Back: SearchBack,
  Input: SearchInput,
  Toggle: SearchToggle,
  Button: SearchButton,
});

export default Search;
