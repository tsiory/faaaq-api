import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('api/v1/items')
@ApiTags('Items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all items.' })
  @ApiResponse({
    status: 200,
    description: 'All items.',
    type: Item,
    isArray: true,
  })
  getItems(): Item[] {
    return this.itemsService.getItems();
  }

  @Get('search/:words')
  @ApiOperation({
    summary:
      'Search some words that might be found inside answers or questions.',
    description:
      'Search some words that might be found inside answers or questions. The parameter `words` is case insensitive.',
  })
  @ApiResponse({
    status: 200,
    description: "Items with `words` inside it's questions or/and answers.",
    type: Item,
    isArray: true,
  })
  searchItems(@Param('words') words: string): Item[] {
    return this.itemsService.searchItems(words);
  }
}
