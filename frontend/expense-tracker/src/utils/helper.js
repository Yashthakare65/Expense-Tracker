import moment from "moment";

export const validateEmail=(email)=>{
  const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials =(name)=>{
  if(!name) return "";

  const words=name.split(" ");
  let initials="";

  for(let i=0;i<Math.min(words.length,2);i++){
    initials +=words[i][0];
  }

  return initials.toUpperCase();
};

export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";

  let [integerPart, fractionalPart] = num.toString().split(".");
  
  // Indian number format
  let lastThree = integerPart.slice(-3);
  let otherNumbers = integerPart.slice(0, -3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  const formattedInteger =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  return fractionalPart ? `${formattedInteger}.${fractionalPart}` : `${formattedInteger}`;
};


export const prepareExpenseBarChartData = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),  // 👈 x-axis label
    amount: item?.amount,
    category: item?.category,
  }));

  return chartData;
};

export const prepareIncomeBarChartData=(data=[])=>{
  const sortedData=[...data].sort((a,b)=>new Date(a.date)-new Date(b.date));

  const chartData=sortedData.map((item)=>({
    month:moment(item?.date).format('Do MMM'),
    amount:item?.amount,
    source:item?.source,
  }));
  return chartData;
}

export const prepareExpenseLineChartData=(data=[])=>{
  const sortedData=[...data].sort((a,b)=>new Date(a.date)-new Date(b.date));

  const chartData=sortedData.map((item)=>({
    month:moment(item?.date).format('Do MMM'),
    amount:item?.amount,
    category:item?.category,
}));
return chartData;
}