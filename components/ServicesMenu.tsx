import React from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';

const InvestorCampaignsItem: React.FC = () => <li><Link href="/services/investor-campaigns">Investor Campaigns</Link></li>;
const VideoYouTubeMediaItem: React.FC = () => <li><Link href="/services/video-youtube-media">Video & YouTube Media</Link></li>;
const NewsSyndicationItem: React.FC = () => <li><Link href="/services/news-syndication">News Syndication</Link></li>;
const ConferenceMediaCoverageItem: React.FC = () => <li><Link href="/services/conference-media-coverage">Conference Media Coverage</Link></li>;
const DigitalBrandingItem: React.FC = () => <li><Link href="/services/digital-branding">Digital Branding</Link></li>;
const GlobalOutreachItem: React.FC = () => <li><Link href="/services/global-outreach">Global Outreach</Link></li>;
const SocialMediaGrowthItem: React.FC = () => <li><Link href="/services/social-media-growth">Social Media Growth</Link></li>;
const PodcastInterviewFeaturesItem: React.FC = () => <li><Link href="/services/podcast-interview-features">Podcast & Interview Features</Link></li>;
const NewsletterEmailBlastsItem: React.FC = () => <li><Link href="/services/newsletter-email-blasts">Newsletter & Email Blasts</Link></li>;
const PaidAdCampaignsItem: React.FC = () => <li><Link href="/services/paid-ad-campaigns">Paid Ad Campaigns</Link></li>;
const PressOffice: React.FC = () => <li><Link href="/press-office">Press Office</Link></li>;

const ServicesMenu: React.FC = () => {
  return (
    <li>
      <Link href="/services">Services</Link>
      <ul className="submenu">
        <InvestorCampaignsItem />
        <VideoYouTubeMediaItem />
        <NewsSyndicationItem />
        <ConferenceMediaCoverageItem />
        <DigitalBrandingItem />
        <GlobalOutreachItem />
        <SocialMediaGrowthItem />
        <PodcastInterviewFeaturesItem />
        <NewsletterEmailBlastsItem />
        <PaidAdCampaignsItem />
        <PressOffice />
      </ul>
    </li>
  );
};

export default ServicesMenu;