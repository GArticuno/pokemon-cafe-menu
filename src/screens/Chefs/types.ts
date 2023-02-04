export type ChefProps = {
  objectId: string;
  name: string;
  image: {
    __type: string;
    name: string;
    url: string;
  };
};

export type ResponseProps = {
  results: ChefProps[];
};