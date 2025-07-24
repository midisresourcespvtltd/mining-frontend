import React from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';

const CEOProfileItem: React.FC = () => <li><a href="/magazine/ceo-profile">CEO Profile</a></li>;
const NewsletterItem: React.FC = () => <li><a href="/magazine/newsletter">Newsletter</a></li>;
const CompanyProfileItem: React.FC = () => <li><a href="/magazine/company-profile">Company Profile</a></li>;
const DigitalEditionItem: React.FC = () => <li><a href="/magazine/digital-edition">Digital Edition</a></li>;
const MultimediaItem: React.FC = () => <li><a href="/magazine/multimedia">Multimedia </a></li>;
const WebinarRecordingItem: React.FC = () => <li><a href="/magazine/webinar-recording">Webinar Recording</a></li>;
const MonthlyNewsletterItem: React.FC = () => <li><a href="/magazine/monthly-newsletter">Monthly Newsletter</a></li>;

const MagazineMenu: React.FC = () => {
  return (
    <li>
      <Link href="/back-copies">Magazine</Link>
      <ul className="submenu">
        <CEOProfileItem />
        <NewsletterItem />
        <CompanyProfileItem />
        <DigitalEditionItem />
        <MultimediaItem />
        <WebinarRecordingItem />
        <MonthlyNewsletterItem />
      </ul>
    </li>
  );
};

export default MagazineMenu; 