import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('Вызов onClick при isDisabled = false', () => {
    const handleClick = vi.fn();
    render(<Button title="Push me!" onClick={handleClick} />);
    const button = screen.getByText("Push me!");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Вызов onClick при isDisabled = true', () => {
    const handleClick = vi.fn();
    render(<Button title="Push me!" onClick={handleClick} isDisabled={true} />);
    const button = screen.getByText("Push me!");

    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
 
    expect(button.disabled).toBe(true);
  });
});