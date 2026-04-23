import { Container } from '@/components/container';
import { Skeleton } from '@/components/ui/skeleton';
import { Wrapper } from '@/components/wrapper';

export default function Loading() {
  return (
    <Wrapper size="lg">
      <Container>
        <div className="space-y-4">
          <Skeleton className="h-7 w-64" />
          <Skeleton className="h-4 w-full max-w-3xl" />
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Skeleton className="h-[380px] w-full" />
          <Skeleton className="h-[380px] w-full" />
        </div>
      </Container>
    </Wrapper>
  );
}
