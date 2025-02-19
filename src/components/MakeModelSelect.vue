<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import makes from '../lib/makes';
import { byMake, byFullname } from '../lib/models';
import { sortUsingProp } from '../lib/utils';
import SelectControl from './SelectControl.vue';
import InputControl from './InputControl.vue';

const props = defineProps<{
  make: string;
  model: string;
}>();

const state = reactive({
  // makeNotListed: false,
  // modelNotListed: false,
  make: props.make,
  model: props.model,
  otherMake: '',
  otherModel: '',
});

if (!byFullname.get(props.model)) {
  // state.makeNotListed = true;
  // state.modelNotListed = true;
  state.make = 'notlisted';
  state.model = 'notlisted';
  state.otherModel = props.model.toString();
}

const emit = defineEmits<{
  (e: 'update:make', v: string): void,
  (e: 'update:model', v: string): void,
}>();

const makeOptions = computed(() => {
  const options = makes.map((m) => ({
    value: m,
    label: m,
  }));
  options.unshift({ value: 'notlisted', label: 'Not Listed' });
  return options;
});

const modelOptions = computed(() => {
  if (!state.make) return [];
  const models = byMake.get(props.make) || [];
  const sorted = sortUsingProp(models.map((m) => ({
    value: m.fullname,
    label: m.shortname,
  })), 'label', 'desc');
  sorted.unshift({ value: 'notlisted', label: 'Not Listed' });
  return sorted;
});

function getFullOtherModel() {
  return [state.otherMake, state.otherModel]
    .join(' ')
    .trim();
}

watch(modelOptions, (current) => {
  if (current.length === 2) {
    emit('update:model', current[1].value);
  }
});

watch(() => state.make, (current) => {
  if (current === 'notlisted') {
    state.model = 'notlisted';
  } else {
    emit('update:make', current);
    emit('update:model', '');
  }
});

watch(() => state.model, (current) => {
  if (current !== 'notlisted') {
    emit('update:model', current);
  }
});

watch([() => state.otherMake, () => state.otherModel], () => {
  emit('update:make', state.otherMake);
  emit('update:model', getFullOtherModel());
});
</script>

<template>
  <div class="content">
    <div class="set-upgrades">
      <SelectControl
        v-model="state.make"
        label="Manufacturer"
        class="w-full sm:w-auto sm:min-w-[275px]"
        :options="makeOptions"
      />
      <InputControl
        v-model="state.otherMake"
        label="Other"
        class="w-56"
        placeholder="If not listed"
        :disabled="state.make !== 'notlisted'"
      />
    </div>
    <div class="set-upgrades">
      <SelectControl
        v-model="state.model"
        label="Model"
        :disabled="!make || modelOptions.length === 1"
        :options="modelOptions"
        class="w-full sm:w-auto sm:min-w-[275px]"
      />
      <InputControl
        v-model="state.otherModel"
        label="Other"
        class="w-56"
        placeholder="If not listed"
        :disabled="state.model !== 'notlisted'"
      />
    </div>
  </div>
</template>
