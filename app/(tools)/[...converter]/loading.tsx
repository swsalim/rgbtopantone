import { Container } from '@/components/container';
import { Skeleton } from '@/components/ui/skeleton';
import { Wrapper } from '@/components/wrapper';

export default function Loading() {
  return (
    <Wrapper size="lg">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <Skeleton className="h-[380px] w-full" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-72" />
            <Skeleton className="h-[320px] w-full" />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
