import { Helmet } from 'react-helmet-async';
import { ValuationSlider } from '@/components/ValuationSlider';

const Valuation = () => (
  <>
    <Helmet>
      <title>Car Valuation — MyCarHub</title>
      <meta name="description" content="Get an instant AI-powered valuation of your car. Free and accurate." />
    </Helmet>
    <div className="min-h-screen pt-20">
      <ValuationSlider />
    </div>
  </>
);

export default Valuation;
