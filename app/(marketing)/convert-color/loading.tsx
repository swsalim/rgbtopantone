import { Container } from '@/components/container';
import { Skeleton } from '@/components/ui/skeleton';
import { Wrapper } from '@/components/wrapper';

export default function Loading() {
  return (
    <Wrapper className="md:py-12">
      <Container>
        <div className="space-y-4">
          <Skeleton className="h-8 w-full max-w-3xl" />
          <Skeleton className="h-4 w-full max-w-4xl" />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-28 w-full" />
          ))}
        </div>
      </Container>
    </Wrapper>
  );
}
