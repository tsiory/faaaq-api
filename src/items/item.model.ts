import { ApiProperty } from '@nestjs/swagger';

export class Item {
  @ApiProperty({
    description: 'Identifier for each question/answer tuples.',
  })
  id: string;

  @ApiProperty({
    description: 'Question about the subject.',
  })
  question: string;

  @ApiProperty({
    description: 'Answer of the question.',
  })
  answer: string;
}
