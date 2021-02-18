import FlyerInterface from './FlyerInterface';

export default (flyerData: Record<string, string>): FlyerInterface => {
  return {
    id: +flyerData.id,
    title: flyerData.title,
    startDate: flyerData.start_date,
    endDate: flyerData.end_date,
    isPublished: Boolean(flyerData.is_published),
    retailer: flyerData.retailer,
    category: flyerData.category
  };
};
