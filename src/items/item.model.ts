import { ApiProperty } from '@nestjs/swagger';

export class Item {
  @ApiProperty({
    description: 'Question about the subject.',
  })
  question: string;

  @ApiProperty({
    description: 'Answer of the question.',
  })
  answer: string;
}
