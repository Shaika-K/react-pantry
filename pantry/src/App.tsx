import "./App.css";
// import CountingButton, { TestA } from './components/CountingButton'

type Product = {
  name: string;
  opened: boolean;
  portionsLeft: number;
  type: "produce" | "frozen" | "drinks" | "long-life" | "sauces";
  daysUntilExpiry: number | "never";
};

let stock: Product[] = [];

function showNotifications(): boolean {
  return (
    stock.find(
      (product) => product.daysUntilExpiry !== "never" && (product.daysUntilExpiry < 5 || product.portionsLeft < 2),
    ) !== undefined
  );
}

const notifications = [
  {
    affectedProduct: "Yoghurt",
    alertDescription: "Already opened. Expiring in 2 days.",
  },
  {
    affectedProduct: "Frozen Berries",
    alertDescription: "Not enough left for breakfast.",
  },
];

function Notifications() {
  if (!showNotifications()) {
    return <h2 className="text-xl">No Alerts</h2>;
  }
  return (
    <>
      <div className="flex flex-col gap-4">
        {notifications.map((notification) => (
          <div className="bg-red-600 rounded-xl p-6" key={notification.affectedProduct}>
            <h2 className="text-white w-xl text-2xl">{notification.affectedProduct}</h2>
            <h3 className="text-white w-xl text-xl">{notification.alertDescription}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

function checkStock() {
  stock = [
    {
      name: "weetbix",
      opened: true,
      portionsLeft: 1,
      type: "long-life",
      daysUntilExpiry: 6,
    },
  ];
}

function App() {
  checkStock();
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="p-[3%] flex bg-yellow-100 flex-col gap-3 justify-center items-center">
          <h1 className="text-5xl text-red-600 font-bold">ALERTS</h1>
          <Notifications />
        </div>
        <div className="p-[5%] flex flex-col gap-3 justify-center items-center">
          <button className="text-white text-4xl p-8 cursor-pointer rounded-3xl bg-blue-500 hover:bg-blue-600 border-white border-2">
            Manage Pantry
          </button>
          <div>
            This button goes a page that looks like online shopping website where you can update your pantry/fridge
            stock
          </div>
        </div>
        <div className="p-[10%] bg-green-500 flex flex-col gap-3 justify-start items-center">
          <label className="text-start text-xl w-full text-white" htmlFor="recipeSearch">
            Search for Recipies
          </label>
          <div className="w-full flex gap-2">
            <input placeholder="E.g. beef stroganoff..." className="px-4 bg-white w-full h-12 rounded-xl" id="recipeSearch" />
            <button className="rounded-xl font-semibold px-8 cursor-pointer text-yellow-200 hover:text-yellow-400 text-2xl">
              SEARCH
            </button>
          </div>
          <div>fitlers go here</div>
        </div>
      </div>
    </>
  );
}

export default App;
