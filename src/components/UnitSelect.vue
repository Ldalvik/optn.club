<script setup lang="ts">
import { computed } from 'vue';
import {
  SpringRateUnit, LengthUnit, PressureUnit, ForceUnit, WeightUnit,
} from '../lib/types';
import SelectInput from './SelectInput.vue';

const props = defineProps<{
  modelValue: string,
  type: 'pressure' | 'height' | 'force' | 'springrate' | 'weight',
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

function onUpdate(value: string) {
  emit('update:modelValue', value);
}

const units = {
  pressure: [
    { label: PressureUnit.bar, value: PressureUnit.bar },
    { label: PressureUnit.psi, value: PressureUnit.psi },
  ],
  springrate: [
    { label: 'kgf/mm', value: SpringRateUnit.kgf },
    { label: 'lbs/in', value: SpringRateUnit.lbs },
    { label: 'n/mm', value: SpringRateUnit.nmm },
  ],
  height: [
    { label: 'cm', value: LengthUnit.cm },
    { label: 'in', value: LengthUnit.in },
  ],
  force: [
    { label: 'kgf', value: ForceUnit.kgf },
    { label: 'lbs', value: ForceUnit.lbf },
  ],
  weight: [
    { label: 'kg', value: WeightUnit.kg },
    { label: 'lbs', value: WeightUnit.lbs },
  ],
};

const options = computed(() => units[props.type]);

</script>

<template>
  <SelectInput
    :modelValue="modelValue"
    :options="options"
    class="text-yellow"
    @update:modelValue="onUpdate"
  />
</template>
