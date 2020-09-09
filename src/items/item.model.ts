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

  @ApiProperty({
    description:
      'Flag that indicate if we collapse or not the view in front-end.',
  })
  open: boolean;
}
