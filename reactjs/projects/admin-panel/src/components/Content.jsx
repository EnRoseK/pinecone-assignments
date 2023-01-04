import { ContentWrapper } from './Content/ContentWrapper';
import { SectionHeader } from './Content/SectionHeader';
import { SectionTable } from './Content/SectionTable';

export const Content = () => {
    return (
        <ContentWrapper>
            <SectionHeader title={`Blog Posts`} />
            <SectionTable />
        </ContentWrapper>
    );
};
