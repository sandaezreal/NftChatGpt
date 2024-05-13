import TrendingIcon from "../../app/component/trendingIcon"

export default function TrendingItem({item} : {item:any}) {
    return (
      <div className="p-1">
        <div
          className={`rounded-md text-sm font-semibold py-1 px-2 flex items-center  ${
            item.isSelected ? "bg-brandGreen text-blue-900" : "bg-card"
          }`}
        >
          {item.text}
          <TrendingIcon className="w-4 h-4 ml-1" />
        </div>
      </div>
    );
  }
  